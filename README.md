# What is this library?

This is micro Angular v4+ contenteditable directive for compatibility with Angular forms.
It just implements [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for this purpose.

# Install

You can just copy and paste this [directive](src/index.ts) or install from npm:

```bash
npm install ng-contenteditable --save
```

# Usage

Import and add `ContenteditableDirective` to your module:

```ts
import { ContenteditableDirective } from 'ng-contenteditable';

// ...

@NgModule({
  declarations: [
    ContenteditableDirective
  ],

// ...

})
```

And then you can using it in [template-driven forms](https://angular.io/guide/forms) or in [reactive forms](https://angular.io/guide/reactive-forms) like this:

```html
<form #testForm="ngForm">
  <p
    contenteditable="true"
    name="myFormName"
    [(ngModel)]="title"
    >This is contenteditable text</p>
</form>

<pre>
  {{ testForm.value | json }}
</pre>
```

# Options

With `contenteditable` directive you can pass optional `@Input` value for `propValueAccesor`:

```html
<p
  contenteditable="true"
  propValueAccesor="innerText"
  name="myFormName"
  [(ngModel)]="title"
  >This is contenteditable text</p>
```

In `ContenteditableDirective` this value using like this:

```ts
this.elementRef.nativeElement[this.propValueAccesor]
```

By default it using `textContent`.
