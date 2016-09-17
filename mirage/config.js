export default function() {
this.namespace = '/api';
this.get('fruits', function(){
  return {
    data: [{
      type: "fruits",
        id: "fruit001",
        attributes: {
          name: "Tangerine",
          city: "Tangier",
          type: "Citrus",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg"
        }
      }, {
        type: "fruits",
        id: "fruits002",
        attributes: {
          name: "Apple",
          city: "Ankara",
          type: "Malus",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
        }
      }, {
        type: "fruits",
        id: "fruits003",
        attributes: {
          name: "Coconut",
          city: "Sumatra",
          type: "Cocos",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Coconut.png"
        }
      
    }]
  };
});
}
