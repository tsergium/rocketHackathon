import { Meteor } from 'meteor/meteor';
import { Categories } from '../imports/collections/categories';

Meteor.startup(() => {
  // code to run on server at startup
    const numberRecords = Categories.find({}).count();
    if (!numberRecords) {
        Categories.insert({'token': 'beerCat', 'name': 'Beer Cat'});
        Categories.insert({'token': 'hippieCat', 'name': 'Hippie Cat'});
    }

    Meteor.publish('categories', function() {
        return Categories.find({});
    });

});
