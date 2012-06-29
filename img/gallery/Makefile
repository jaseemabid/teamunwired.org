# Target is phony now. Fix later
# Seems like GNUMake suck when it comes to "do something per prerequisite"

RM = /bin/rm -r
LN = /bin/ln -r
CP = /bin/cp -r
DEST = thumbs
files = $(shell ls | grep -v thumbs | grep -v Makefile)
thumbfiles = $(addprefix $(DEST)/thumb., $(files))

CONVERT = mogrify -resize 220x160 -background transparent -gravity center -extent 220x160 -format png -quality 75 -path $(DEST)

$(thumbfiles): $(files)
	$(CONVERT) $^

usage:
	@echo ""
	@echo "usage:"
	@echo ""
	@echo "* make thumbs -- to make thumbnails"
	@echo "* make clean -- to clean up thumbnails"
	@echo ""

clean:
	# cd $(DEST) ; $(RM) thumb.*

.PHONY : all thumbs clean
