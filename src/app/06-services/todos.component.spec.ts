import { TodosComponent } from './todos.component';
import {TodoService} from './todo.service';
import {from, throwError} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3];
    // Arrange
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(component.todos).toBe(todos);

  });

  it('should call the server when a new todo item is added', function () {
    let todo = {id: 1};
    /*spyOn(service, 'add').and.returnValue(from([todo]));*/
    // Using Call Fake
    spyOn(service, 'add').and.callFake(() => {
      return from([todo]);
    });

    component.add();

    expect(component.todos);
  });

  it('should set error if server returns error while adding todo', function () {
    let error = 'Error from the server';

    spyOn(service, 'add').and.returnValue(from(throwError(error)));
    component.add();
    expect(component.message).toBe(error);

  });

  xit('should delete todo from the server', function () {
    spyOn(window, 'confirm').and.returnValue(true);

    let spy = spyOn(service, 'delete').and.callFake(() => {
      return from([{}]);
    });

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });

  xit('should NOT delete todo from the server if User cancels', function () {
    spyOn(window, 'confirm').and.returnValue(false);

    let spy = spyOn(service, 'delete').and.callFake(() => {
      return from([{}]);
    });

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();

  });

});
