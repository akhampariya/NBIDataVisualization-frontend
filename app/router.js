import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/', { path: '/index'});
  this.route('about')
  this.route('contact');
  this.route('nbidata');
  this.route('login');
  this.route('register');
  this.route('logout');
  this.route('bridges');
  this.route('events');
});

export default Router;
