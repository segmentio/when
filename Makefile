#
# Binaries.
#

ZUUL = ./node_modules/.bin/zuul

#
# Files.
#

SRCS = index.js
TESTS = test/index.test.js

#
# Tasks.
#

# Install node dependencies.
node_modules: package.json $(wildcard node_modules/*/package.json)
	@npm install

# Clean temporary files and build artifacts.
clean:
	@rm -rf *.log
.PHONY: clean

# Clean temporary files, build artifacts, and vendor dependencies.
distclean: clean
	@rm -rf components node_modules
.PHONY: distclean

# Run tests at the command line.
test-phantom: node_modules
	@$(ZUUL) --ui mocha-bdd --phantom -- $(TESTS)

# Run tests in the browser.
test-browser: node_modules
	@$(ZUUL) --ui mocha-bdd --local -- $(TESTS)
.PHONY: test

# Run tests.
test: test-phantom
.DEFAULT_GOAL = test
