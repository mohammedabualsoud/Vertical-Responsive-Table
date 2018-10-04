import * as angular from 'angular';
import 'angular-mocks';
import {VerticalResponsiveTable} from './VerticalResponsiveTable';

describe('VerticalResponsiveTable component', () => {
  beforeEach(() => {
    angular
      .module('verticalResponsiveTable', ['app/component/VerticalResponsiveTable/VerticalResponsiveTable.html'])
      .component('verticalResponsiveTable', VerticalResponsiveTable);
    angular.mock.module('verticalResponsiveTable');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<VerticalResponsiveTable></VerticalResponsiveTable>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
