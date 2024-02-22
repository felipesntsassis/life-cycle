import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	OnDestroy,
	OnInit,
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewChecked,
		AfterViewInit,
		OnDestroy
{
	quantidade: number = 0;

	constructor() {}

	ngOnDestroy(): void {
		console.log('Good by my friend!');
	}

	// checked -> content -> view

	// depois da inicialização da view
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	// após alguma alteração verifica a view
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

	// quando o conteúdo é iniciado
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}

	// após alguma alteração, verifica o conteúdo
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}

	ngOnInit(): void {
		console.log('ngOnInit');
	}

	adicionar() {
		this.quantidade += 1;
	}

	decrementar() {
		this.quantidade -= 1;
	}
}
