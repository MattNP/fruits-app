import { test } from 'qunit';
import moduleForAcceptance from 'fruits-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list fruits');

test('should redirect to fruits route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/fruits', 'should redirect automatically');
  });
});

test('should list available fruits.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});