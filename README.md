# Modal manager in VanillaJS 

## vanillaModal()
> v 0.0.1

Simple modal manager in native Javascript

### Features 
+ Simple script with no dependencies
+ Generate a grey layout
+ Automatic calcul position in center of window
+ Binding Events Open/Close for interact with popin
+ Automatic prepare DOM
+ Strong Code with unit tests.

#### DEMO
Clone this repository and in CLI : 
> gulp

*NB : Prevent Error with mochify, install before phantomjs with -g parameter*

### HTML
This script have need a minimal structure HTML.
```
<a href="#" class="open-my-modal">open a modal</a>
<div id="modalContainer">Content of modal</div>
```

### JS
A simple call script
```
<script>
	new vanillaModal({
		selector : "open-my-modal", // name of cssClass
    	target : "modalContainer" // id of container
	});
</script>
```

### CSS
Import a basics CSS styles in your project for your first modal. 
After works, you can made easy custom styles in use "cssToContainer" parameter.

```
<link rel="stylesheet" type="text/css" href="stylesheets/plugin.popinManager.css" />
```

### Custom popin in global container
As evocate more top, you can use the parameter "cssToContainer", you can pass a css class for integrate your styles and add easily effect in CSS3
```
<script>
	new vanillaModal({
		selector : "open-my-modal",
    	target : "modalContainer",
    	cssToContainer : "modalStyles"
	});
</script>
```

### Parameters
Multiple parameters permits you to adapt this script at your usecase.


| Name 		     | Type     | Default    	    | Description 							  						  |
|----------------|----------|-------------------|-----------------------------------------------------------------|
| **selector** 	 | String   | ""         		| (required) CssClass represent element launch open event         |
| **target**     | String   | ""         		| (required) Target content of modal 		 		 			  |
| idContainer    | String   | containerID_      | Used for generate an wrapper of container of the modal 		  |
| withLayer      | Boolan   | true				| generate a grey layer or not									  |
| layerID	     | String   | modalLayer        | #id of grey layer, auto generated								  |
| eventStart     | String   | click				| Event to start launch open modal 								  |
| cssToContainer | String   | ""				| Add a css to an container auto generated 						  |
| isOpen 		 | Boolean  | false   			| State of object  												  |

### Roadmap
+ Add Unit-Tests
+ Replace options that are string empty by default in null values
+ Add Ajax content
+ Add Callback methods
+ Add timer for auto-close modal (prehome mode)

### FAQ
If you have positionning problem, look at this script is executed in bottom of your page or integrate it in readyDom() method. If your page contain many content, it is necessary to wait that DOM entire load.
Else if you have a problem with this script, please open an issue.

### Licence 
> MIT 2015





