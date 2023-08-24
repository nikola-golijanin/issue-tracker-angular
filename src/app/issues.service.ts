import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from 'src/assets/mock-issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues: Issue[] = issues;

  constructor() {}
  getPendingIssues(): Issue[] {
    return this.issues.filter((i) => !i.completed);
  }
}
