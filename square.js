export default class Square{
	constructor(w,h){
		this.width =w;
		this.height =h;
	}
	area(){
		return this.width*this.height;
	}
}