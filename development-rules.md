
# Project Development Rules

* Must Include third party libraries via import statement only, Dont include them via angular-cli.json it leads to downgrade the compilation process and debugging.

* Use jquery only for making API calls not to perform DOM operations.

* Data must flows down to child components from App Component

* Use PubSub Service for emiting and listening on data b'coz it has very effective and light weight footprint, it falls under component change detection

* Use ```app.navigateByUrl``` always when navigating from page to page, It is easy to track user navigation and listen to route change before angular detects.

* Make sure there is no circular dependencies in services directly or indirectly.


## PubSub Usage

* Try to subscribe events in App Component itself and publish event from child components to app component. for example see below code

```
// in App Component
pubsub.subscribe('user-updated', () => {
    // Perform Updation action on User object in Session Service
});
```
publish above event from In Child components like User Profile

```
pubsub.publish('user-updated');
```

It can write in App Component but as per behaviour pattern we isolate pubsub code into seperate service.