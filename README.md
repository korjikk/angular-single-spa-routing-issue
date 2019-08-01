# AngularSingleSpaRoutingIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

After the generation, I have:
* Created 2 child components.
* Installed single-spa package
* Imported the navigateToUrl function from single-spa package into first-child.component, and declared an unused function which would call the navigateToUrl function.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Reproducing the routing issue

* Run the app (see the upper section)
* Go to a child route (ex: http://localhost:4200/first-child )
* Press the html button (ex: "Second Child") to navigate to another child
* Go back to the previous child by:
    * Using the browser navigation buttons
    * Changing the path manually (ex: from http://localhost:4200/second-child to http://localhost:4200/first-child)
* Try to next child using the html button (ex: "Second Child")

You will see in the console, that the navigation is triggered outside the angular zone.

This is caused just by importing a function from single-spa, and declaring it in the componing (without calling, see first-child.component.ts, line 16)
If you comment the line, the bug would not appear.
