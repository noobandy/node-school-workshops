'use strict'
const Node = function (data, next) {
	this.data = data
	this.next = next
}

const linkedList = function () {
	var head, tail
	var size = 0
	var updateSize = function (count) {
		size += count
	}

	var searchNode = function (item, equal) {
		var node = head;
		while(node && node.data != item) {
			node = node.next
		}
		return node
	}

	return {
		add: function (item) {
			var node = new Node(item)

			if(this.isEmpty()) {
				//first node
				head = tail = node
			} else {
				tail.next = node
				tail = node
			}
			//increase list size by 1
			updateSize(1)
		},
		addAfter: function (after, item, equal) {

		},
		contains: function (item, criterionFunction) {
			var found = false
			var node = head

			if(typeof criterionFunction === 'function') {
				while(node) {
					if(criterionFunction(node.data)) {
						found = true
						break
					}

					node = node.next
				}
			} else {
				while(node) {
					if(item == node.data) {
						found = true
						break
					}

					node = node.next
				}
			}
			return found
		},
		size: function () {
			return size
		},
		isEmpty: function () {
			return size == 0
		},
		remove: function (item) {
			var node = head
			var prev = head
			var removed = false;

			while(node && node.data != item) {
				prev = node
				node = node.next
			}

			if(node) {
				if(node == head && node == tail) {
					//only one node
					head = tail = undefined
					removed = true
				}

				if(node == head) {
					//first node
					head = node.next
					removed = true
				}

				if(node == tail) {
					//last node
					prev.next = undefined
					tail = prev
					removed = true
				}
				if(!removed) {
					//for everything else
					prev.next = node.next
					removed = true
				}
				//decrease list size by 1
				updateSize(-1)
				
			}
			return removed
		}
	}
}


module.exports = linkedList