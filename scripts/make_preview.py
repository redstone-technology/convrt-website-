"""Preview build helper. Usage:
  PUBLIC_PREVIEW=1 npx astro build && python3 scripts/make_preview.py dist/client preview

Copy an Astro static build and rewrite root-absolute paths to relative ones,
so the site works when hosted under any base path (the review preview)."""
import os, re, shutil, sys

src, dst = sys.argv[1], sys.argv[2]
shutil.rmtree(dst, ignore_errors=True)
shutil.copytree(src, dst)
ATTR = re.compile(r'((?:href|src|component-url|renderer-url|before-hydration-url)=")(/[^"]*)(")')

def target(p):
    path, _, frag = p.partition('#')
    frag = '#' + frag if frag else ''
    if path.startswith('/_astro/') or os.path.splitext(path)[1]:
        return path.lstrip('/') + frag
    path = path.strip('/')
    return (f'{path}/index.html' if path else 'index.html') + frag

for root, _, files in os.walk(dst):
    for f in files:
        full = os.path.join(root, f)
        rel_depth = os.path.relpath(root, dst).count(os.sep) + (0 if os.path.relpath(root, dst) == '.' else 1)
        prefix = '../' * rel_depth or './'
        if f.endswith('.html'):
            s = open(full, encoding='utf-8').read()
            s = ATTR.sub(lambda m: m.group(1) + prefix + target(m.group(2)) + m.group(3), s)
            open(full, 'w', encoding='utf-8').write(s)
        elif f.endswith('.css'):
            s = open(full, encoding='utf-8').read()
            s = s.replace('url(/_astro/', 'url(./')
            open(full, 'w', encoding='utf-8').write(s)
# The preview host reserves names starting with "_": rename the asset folder
os.rename(os.path.join(dst, '_astro'), os.path.join(dst, 'assets'))
for root, _, files in os.walk(dst):
    for f in files:
        if f.endswith(('.html', '.css', '.js')):
            full = os.path.join(root, f)
            s = open(full, encoding='utf-8').read()
            if '_astro/' in s:
                open(full, 'w', encoding='utf-8').write(s.replace('_astro/', 'assets/'))
print('ok')
