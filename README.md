## My Github Page

### Build Instructions

* ```npx expo export --platform web --output-dir web-build``` (builds statically)
* ```npx serve web-build``` (preview statically)
* Add contents of ```web-build``` folder to gh-pages branch


### To Rebuild Display Code

 * Nagivate to ```packages/custom-7-segment```
 * Build typescript with ```npm run build```
 * Run ```cd ../..```
 * Install with ```npm install```

 The custom version of the 7 segment display should now be usable.