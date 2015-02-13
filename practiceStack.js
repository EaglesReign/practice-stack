function Stack() {
	 this.dataStore = [];
	  this.top = 0;
	   this.push = push;
	    this.pop = pop;
	     this.peek = peek;
	      this.length = length;
	       this.clear = clear;
}

function push(element) {
	 this.dataStore[this.top++] = element;
}

function pop() {
	 return this.dataStore[--this.top];
}

function peek() {
	 return this.dataStore[this.top-1];
}

function length() {
	 return this.top;
}

function clear() {
	 this.top = 0;
	  this.dataStore.length = 0;
}

var stack = [];
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

var total = 0;
while (!(stack.length == 0)) {
  total += stack.pop();
}
print(total);
