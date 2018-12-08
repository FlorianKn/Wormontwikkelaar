import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule , HttpClientModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
