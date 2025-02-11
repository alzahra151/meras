import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-one',
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
    accordionItems: any[] = [];
    ourWorks:[]=[]
    constructor(private translate:TranslateService) { }

    ngOnInit(): void {
        this.initializeAccordionItems()
    }

    teamSlides: OwlOptions = {
		loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        rtl: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }
    clientWrap: OwlOptions = {
		loop:true,
		margin:30,
		nav:false,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 800,
		autoplayHoverPause: true,
		center: false,
		responsive:{
			0:{
				items:1,
				margin: 10,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
				margin: 20,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			}
		}
    }

    // Accordion
    // accordionItems = [
    //     {
    //         title: this.translate.instant('whyMeras.title'),
    //         content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
    //         open: false
    //     },
    //     {
    //         title: 'Update Technology',
    //         content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
    //         open: false
    //     },
    //     {
    //         title: 'Experienced Team',
    //         content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
    //         open: false
    //     },
    //     {
    //         title: 'Best Quality Service',
    //         content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
    //         open: false
    //     }
    // ];
    initializeAccordionItems() {
        this.translate.get([
            'whyMeras.items.1.title',
            'whyMeras.items.1.title',
            'whyMeras.items.2.title',
            'ACCORDION.UPDATE_TECHNOLOGY.CONTENT',
            'whyMeras.items.3.title',
            'ACCORDION.EXPERIENCED_TEAM.CONTENT',
            'whyMeras.items.4.title',
            'ACCORDION.BEST_QUALITY_SERVICE.CONTENT'
        ]).subscribe(translations => {
            this.accordionItems = [
                {
                    title: translations['whyMeras.items.1.title'],
                    content: translations['ACCORDION.GREAT_UNDERSTANDING.CONTENT'],
                    open: false
                },
                {
                    title: translations['whyMeras.items.2.title'],
                    content: translations['ACCORDION.UPDATE_TECHNOLOGY.CONTENT'],
                    open: false
                },
                {
                    title: translations['whyMeras.items.3.title'],
                    content: translations['ACCORDION.EXPERIENCED_TEAM.CONTENT'],
                    open: false
                },
                {
                    title: translations['whyMeras.items.4.title'],
                    content: translations['ACCORDION.BEST_QUALITY_SERVICE.CONTENT'],
                    open: false
                }
            ];
        });
    }
    selectedItem : any = null;
    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
    loadTranslations() {
        this.translate.get('ourWorks').subscribe(data => {
            this.ourWorks = data;
        });
    }

}