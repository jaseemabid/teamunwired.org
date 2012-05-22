# Makefile for teamunwired.org deployment

SRC_DIR = js

JS_ENGINE ?= `which node nodejs 2>/dev/null`
COMPILER = jsmin

JS_LIBS = ${SRC_DIR}/jquery-1.7.1.min.js \
	${SRC_DIR}/bootstrap.min.js\

BASE_FILES = ${SRC_DIR}/script.js

MODULES = ${JS_LIBS}\
	${BASE_FILES}

SC = ${SRC_DIR}/teamunwired.js
SC_MIN = ${SRC_DIR}/teamunwired.min.js

all: script min lessc
	@@echo "teamunwired build complete."

script: ${SC}

${SC}: ${MODULES} | ${SRC_DIR}
	@@echo "Building the file" ${SC};
	@@cat ${MODULES} > ${SC};

min: script ${SC_MIN}

${SC_MIN}: ${SC}
	${COMPILER} < ${SC} > ${SC_MIN} ;

lessc :
	bash -c "lessc -x css/style.less > css/style.min.css"

clean:
	@@echo "Cleaning up build files"
	@@echo "Deleting" ${SC} ${SC_MIN}
	@@rm -f ${SC} ${SC_MIN}
	@@echo "Deleting css/style.min.css"
	@@rm -f css/style.min.css

.PHONY: all script min clean
