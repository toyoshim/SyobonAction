install: build
	cp src/SyobonAction.data chrome/
	cp src/SyobonAction.html.mem chrome/
	cp src/SyobonAction.js chrome/
	cp bower_components/chime/chime-0.94.2.min.js chrome/

build:
	(cd src; make -f Makefile.emcc)

libs:
	bower install chime#0.94.2
