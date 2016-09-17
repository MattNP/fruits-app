import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fruits-listing', 'Integration | Component | fruits listing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fruits-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fruits-listing}}
      template block text
    {{/fruits-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
