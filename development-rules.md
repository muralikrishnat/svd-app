
# Project Development Rules

* Must Include third party libraries via import statement only, Dont include them via angular-cli.json it leads to downgrade the compilation process and debugging.

* Use jquery only for making API calls not to perform DOM operations.

* Data must flows down to child components from App Component

* Use PubSub Service for emiting and listening on data b'coz it has very light weight footprint