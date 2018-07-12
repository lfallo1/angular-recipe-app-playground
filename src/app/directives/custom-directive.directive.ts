import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {

  @Input() paramContent: string;
  @Input() paramColor: string;

  @HostBinding('style.backgroundColor') backgroundStyle: string = 'transparent';
  @HostBinding('style.color') colorStyle: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', this.backgroundColor || '#3700b3');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundStyle = this.paramColor || '#3700b3';
    this.colorStyle = 'white';
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', this.backgroundStyle || 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.colorStyle || 'black');
    this.backgroundStyle = 'transparent';
    this.colorStyle = 'black';
  }

  ngOnInit(): void {
    this.renderer.setProperty(this.elRef.nativeElement, 'innerHTML', this.paramContent || 'This is the content');
  }

}
