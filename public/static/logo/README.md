## Introduction

Logo for https://debug.health

```sh
xelatex logo.tex
convert -density 2000 -quality 2000 -resize 8000 logo.pdf logo.png
mogrify -crop 7272x7272+364+0 logo.png
convert -resize 1024 logo.png logo-1024x1024.png
convert -alpha remove -background white logo-1024x1024.png logo-1024x1024-white.png
```
