# WIZZCAD TEST

Create a simple Typescript / Node API allowing you to manage a form designer.

Each form template contains typed fields that can be named by the user and marked as mandatory.

The following field types are needed :

text
numeric (fixed, float, percent ...)
true / false
list selector (from a specified list values)
To allow clear view on form display, user can group fields by sections in the form designer. A section can contains one or many sections or directly fields.

The API should allow creation and edition of form templates, fields and sections. Data should never be deleted in the db but user can mark as deleted and restore items in his interface.

The api should expose list of available form templates and a specific template by id returning all the informations of the selected item.

Feel free to use any CLI and libraries available :)

# How to use the project ?

```sh
# Install dependencies
$ yarn install

# Start
$ yarn start
```
