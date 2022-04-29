import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { User } from '../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  start: number = 0;
  end: number = 0;
  flag:boolean = false;
  x:number = 0.245;

  users: User[] = [
    {
      id: 1,
      name: 'a',
      title: 'to make a blinded choice to reject or provident to task',
      body: 'because he receives and accepts the accepted consequences that are unencumbered and when he finds annoyance',
    },
    {
      id: 2,
      name: 'b',
      title: 'who is to be',
      body: "it is the time of life to pursue the things that are to be blamed for the pain of a blessed one, nor avoid the pleasures of flattery, nor any further annoyance to reject one's debts",
    },
    {
      id: 3,
      name: 'c',
      title: 'abuse her as an exercise in who she or she is',
      body: 'and who is blinded by the pleasure of the just but by what right to choose, or to the pleasure of the pains or the accusers?',
    },
    {
      id: 4,
      name: 'd',
      title: 'he is blinded',
      body: "to obtain any pleasure by rejecting one's love and often taking care of things is a fault\nobody is obliged to know the thing and the pain itself is right\nobody wants the pleasure of things",
    },
    {
      id: 5,
      name: 'e',
      title: 'know how to hate',
      body: 'to be rejected is to seek pardon but to be rejected or to escape',
    },
    {
      id: 6,
      name: 'f',
      title: 'I open them for my great sorrow',
      body: 'so that no one will reject the body of these women, they foresee nothing to follow, nudge us some uneasiness, and no one will find fault with those who accuse us, which by pleasure he wills pain and pain and uneasiness',
    },
    {
      id: 7,
      name: 'g',
      title: 'great but easy',
      body: 'the pain may please some people in the life where it is important for anyone who is anyone whither no one will ever drive back, to receive them because they want to follow them but which they are',
    },
    {
      id: 8,
      name: 'h',
      title: 'pain is the actual pain',
      body: "I will open the pain to those worthy of being easily accepted by some minds who are able to be able to welcome the great ancestors when there has been no such thing as the pain of the pleasures or the life's advantage",
    },
    {
      name: 'i',
      id: 9,
      title: 'know the right time and the pain of all the accusers',
      body: '',
    },
    {
      id: 10,
      name: 'j',
      title: "choice that's annoying for him",
      body: 'in which manner and unencumbered with the duties or great sorrows which must be repudiated, unless there be truly any pardon which we accuse but the error of the truth',
    },
    {
      id: 11,
      name: 'k',
      title: 'and it is for those who praise it',
      body: '',
    },
    {
      id: 12,
      name: 'l',
      title: 'in some time hate is pain',
      body: 'so that either the present or the great because he hates them and the pleasure and the wise because he loves nothing, blinded because that pleasure is the distinction between hatred',
    },
    {
      id: 13,
      name: 'm',
      title: 'pain as a tenderness and often pleasure in the mind',
      body: 'or may we be called the softness of the pleasure of the advantage with which the pain has been corrupted by rejecting the pleasure of the world',
    },
    {
      id: 14,
      name: 'n',
      title: 'pleasure of choosing option',
      body: 'flight and accusing us of enduring pains is pleasure and pain, nor do we',
    },
    {
      id: 15,
      name: 'o',
      title: 'what will come to pass in time',
      body: 'he finds fault with those whom he pleases, he loves even the smallest of duties, and pain prevents the discomfort of repudiating it',
    },
    {
      id: 16,
      name: 'p',
      title:
        'they are willing to accept and encounter the pains of the real world through the intense hatred',
      body: 'sustains for unless I open them or shuns the pleasures of the more nasperious',
    },
    {
      id: 17,
      name: 'q',
      title: 'pleasure flees, but troubles provide pleasure',
      body: 'those born of pleasure and hate',
    },
    {
      name: 'r',
      id: 18,
      title: 'times of pleasure and discomfort',
      body: 'it will happen by which one achieves all of the pain, not pain, and it is a repudiation of the right and great pleasure',
    },
    {
      id: 19,
      name: 's',
      title: 'to obtain or reject one who pleases him',
      body: '',
    },
    {
      id: 20,
      name: 't',
      title:
        'the pwned pleasures of the latter are because they are very small',
      body: 'anything that removes the pain of the present, when it is not all the less, therefore, there is no discomfort from the exertion of the pain',
    },
  ];

  loadMore() {
    if(this.end >= this.users.length)
    {
     this.flag=true;
    }
    else
    {
      this.start = this.end;
      this.end = this.end + 4;
    }

  }


  employees:Employee[] = [
    {empNumber:1,empName:"Drake",empJob:"Manager",empSalary:50000,empDeptNo:10,empGrade:1},
    {empNumber:2,empName:"Adam",empJob:"Manager",empSalary:60000,empDeptNo:11,empGrade:2},
    {empNumber:3,empName:"John",empJob:"Engineer",empSalary:40000,empDeptNo:12,empGrade:3},
    {empNumber:4,empName:"Mike",empJob:"QA",empSalary:40000,empDeptNo:13,empGrade:4},
    {empNumber:5,empName:"Smith",empJob:"Engineer",empSalary:45000,empDeptNo:14,empGrade:1},
    {empNumber:6,empName:"Blake",empJob:"QA",empSalary:45000,empDeptNo:15,empGrade:2},
  ];
  constructor() {}

  ngOnInit(): void {}
}
