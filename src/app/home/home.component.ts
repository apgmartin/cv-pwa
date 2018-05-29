import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

	windowInnerWidth;
	windowInnerHeight;
	menuArcHeight;
	menuArcWidth;
	menuOpen: Boolean;
	arrowMarginBottom;
	arrowAnimation;
	arrowOpacity;
	leafRotation;
	homeImageBottom;
	scrollPositionY;
	@ViewChild("arrowContainer", {read: ElementRef}) arrowContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  	this.windowInnerWidth = window.innerWidth;
  	this.windowInnerHeight = window.innerHeight;
  	this.menuArcWidth = document.getElementsByClassName('top-right')[0].getBoundingClientRect().width;
  	this.menuArcHeight = document.getElementsByClassName('top-right')[0].getBoundingClientRect().height;
  	this.menuOpen = false;
  	this.arrowMarginBottom = 0.2;
  	this.arrowOpacity = 1;
  	this.scrollPositionY = window.scrollY;
  	setTimeout(() => {this.calculateLeafPosition()}, 0);
  		
  	console.log((this.windowInnerHeight - 5) - this.arrowContainer.nativeElement.getBoundingClientRect().y);
  	console.log(this.arrowContainer.nativeElement.getBoundingClientRect().y);

  	// this.animateArrow();
  }

  @HostListener('window:resize', ['$event'])
	onResize(event) {
		this.windowInnerWidth = event.target.innerWidth;
		this.windowInnerHeight = event.target.innerHeight;
		this.calculateLeafPosition();
		console.log(this.windowInnerWidth);
		console.log(this.windowInnerHeight);
	}

	@HostListener('window:scroll', ['$event'])
	onScroll(event) {
		console.log(window.scrollY);
		this.arrowOpacity = this.arrowOpacity - 0.05
		// console.log(this.arrowContainer.nativeElement.getBoundingClientRect().y);
		// console.log(this.arrowContainer.nativeElement.getBoundingClientRect().y);
		// this.arrowOpacity = 20 / ((this.windowInnerHeight - 5) - this.arrowContainer.nativeElement.getBoundingClientRect().y);
		console.log(this.arrowOpacity)
		this.arrowOpacity = 1 - (window.scrollY / 80);

		console.log(event);
		this.leafRotation = 'rotate(' + window.scrollY/2 + 'deg)'
		this.scrollPositionY = window.scrollY
	}

	animateArrow() {
		let delta = 0.01;
		this.arrowAnimation = window.setInterval(() => {
			if (this.arrowMarginBottom >= 0.5 || this.arrowMarginBottom <= 0) {
				delta = - delta;
			}

			this.arrowMarginBottom = this.arrowMarginBottom + delta;
		}, 30);
	}

	toggleMenu($event) {
		let topRight = document.getElementsByClassName('top-right')[0];
		let burgerMenu = document.getElementsByClassName('menu-svg')[0];

		if(this.menuOpen) {
			return this.closeMenu($event, topRight, burgerMenu);
		}
		this.openMenu($event, topRight, burgerMenu);
	}

	openMenu($event, topRight, burgerMenu){
		if (window.innerWidth > 500) {
			this.menuArcWidth = 500;
			this.menuArcHeight = 500;
		} else {
			this.menuArcWidth = window.innerWidth;
			this.menuArcHeight = window.innerWidth;
		}
		
		topRight.style.backgroundColor = '#FFFFFF';
		burgerMenu.style.fill = '#031C1E';

		this.menuOpen = true;
	}

	closeMenu($event, topRight, burgerMenu) {
		this.menuArcWidth = 75;
		this.menuArcHeight = 75;

		topRight.style.backgroundColor = '#031C1E';
		burgerMenu.style.fill = '#FFFFFF';

		this.menuOpen = false;
	}

	calculateLeafPosition() {
		let bottomPosition = document.getElementsByClassName('home-image-row')[0].getBoundingClientRect().bottom + window.scrollY;
		let leafTop = bottomPosition - 15;
		this.homeImageBottom = leafTop + 'px';
	}

	scrollToTop() {
		if (window.scrollY === 0) {
			return;
		}

		let scrollingUp = window.setInterval(() => {
			if(window.scrollY === 0) {
				clearInterval(scrollingUp);
			}

			window.scrollTo(0, window.scrollY - 20);
		}, 2);
	}
}
