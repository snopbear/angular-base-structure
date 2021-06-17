my-app/
├─ node_modules/
├─ public/
│ ├─ favicon.ico
│ ├─ index.html
│ ├─ robots.txt
├─ src/

│ ├─ CoreModule
│ ├──── State
│ ├──── Models
│ ├──── Services
│ ├──── Utitlites

│ ├─ SharedModule
│ ├──── Directives
│ ├──── Components
│ ├──── Pipes
│ ├──── Filters

├─ BlocksModule
│ ├──── Directives
│ ├──── Components
│ ├──── Pipes
│ ├──── Filters

├─ FeatureModule
│ ├──── Directives
│ ├──── Components
│ ├──── Pipes
│ ├──── Filters
│ ├──── Local Services

├─ .gitignore
├─ package.json
├─ README.md

# 1- Core Module - “Singleton module”

..........................................................

A- Application level concept means “imported only once and available throughout your app” and not a business use case.

B- should be singleton through your application which mean should not be imported in your module except application module.

C- Application module is the only module should have the Core Module

A- State
B- Models
C- Services [Shared Across the application]
D- Utilities [Log Module]
E- Interceptors

# In Core Module avoid

A - Components
B - Directives
C - Services
D - Pipes

# All things belong to Generics will add to (Core Module)

# example

A- Logging
B- Messaging

.....................................................................................................................................................................................................................................................................................................................................................................

# 2- Shared Module (Scope shared components)

..........................................................

"The module you want to share crose your application"

# Contains

A- Custome Components like [Rating , Datatable , Drop Down Lists , Generic Filter] and so on.

# Avoid (Core Module contents)

A- State
B- Models
C- Services
D- Utilities
E- Interceptors

.....................................................................................................................................................................................................................................................................................................................................................................

# 3- Shared Module (Scope usr interface)

..........................................................

1- Some component needs to be singleton through out usr application just imported as once.

2- Block VS Core module they are the same concept they are singleton through out your application and they imported once in app module.

3-Block VS Shared module they are the same from content from the same point view but the scope are diffrent.

# Contains [Layout of application]

A- Navbar
B- Footer
C- sidebar
D- Loading Screen Directive
E- Layout of your application
F- Header Toolbar
.....................................................................................................................................................................................................................................................................................................................................................................

# 4- Feature Module 

..........................................................

- The New Story you add to your application or Business use cases,
Add cart is a simple for feature module.

- Core Module , Block Module they are not business use cases 



#feature module not depend on other  feature module it can depend on SharedModule

# Add to cart button in product module should be in shared
# Cart counter in header should be in shared








BLock Module can’t take feature module dependency it should be shared module
