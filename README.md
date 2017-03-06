# ng2-scroll-spy
A useful component to show how much of a page you have read through a page and you are bored looking at the vertical scroll bar. Include the ScrollSpy module, use the <scroll-spy> component, set a custom color for the scroll-spy( or not if you like Red ) and you are ready!


Usage dependencies: Angular 2.4.*

Usage guide:

 Import ScrollSpy module to your application

Sample
import {ScrollSpyModule} from "./scroll-spy/scroll-spy.module";

@NgModule({
  imports:      [ BrowserModule, ScrollSpyModule ],
  declarations: [ <all-your-components> ],
  bootstrap:    [ <bootstrap-component> ],
  providers:    [ <all-your-services> ]
})

 Use <scroll-spy> in any other component in your application 

Sample
<scroll-spy [progressColor]="'blue'"></scroll-spy>
Inputs:
progressColor: String = set a custom color to your scroll spy progress bar.


