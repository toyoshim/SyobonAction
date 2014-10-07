install: build
	cp src/SyobonAction.data chrome/
	cp src/SyobonAction.html.mem chrome/
	cp src/SyobonAction.js chrome/

build:
	(cd src; make -f Makefile.emcc)

