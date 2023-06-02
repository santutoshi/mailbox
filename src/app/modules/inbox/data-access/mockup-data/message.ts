import { MessageModel } from '../models/message.model';

export const MESSAGES_DATA: Array<MessageModel> = [
  {
    id: 1,
    name: 'Sam Miller',
    subject: 'Portfolio',
    email: 'sammiller@gmail.com',
    message:
      'Stop wasting time looking for files buried in folders. Visually organize all your assets in one place',
    attachment: [
      'assets/images/pexels-photo-839011@2x.png',
      'assets/images/pexels-photo-2533686@2x.png',
      'assets/images/pexels-photo-2694453@2x.png',
      'assets/images/pexels-photo-2923672@2x.png',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum facilisis libero, venenatis mattis orci hendrerit eget. Etiam ultrices mollis justo, nec fermentum elit viverra eu. Cras at cursus turpis. Nullam magna sem, vulputate quis massa nec, mollis sollicitudin dui. Sed eu massa in arcu pharetra posuere. Phasellus maximus neque non ex dapibus fringilla. Praesent nec lacinia enim. Curabitur a dui nisl.',
    date: new Date().toDateString(),
    userProfile: 'assets/images/Image 5.png',
  },
  {
    id: 2,
    name: 'Lily Jones',
    subject: 'Invitations',
    email: 'lilyJones@gmail.com',
    message:
      'Its always a pleasure to have you all at my birthday parties. So, please dont be late for this one.',
    attachment: null,
    date: '2023-05-30T15:24:21Z',
    userProfile: 'assets/images/joseph-gonzalez.png',
  },

  {
    id: 3,
    name: 'Smith',
    subject: 'Assingment Submission',
    email: 'smith@gmail.com',
    message:
      'Its always a pleasure to have you all at my birthday parties. So, please dont be late for this one.',
    attachment: null,
    date: '2022-05-30T18:28:21Z',
    userProfile: 'assets/images/NoPath.png',
  },
  {
    id: 4,
    name: 'Patrick',
    subject: 'Interview Scheduled',
    email: 'patrick@gmail.com',
    message:
      "Hi Mike, thanks for applying for UI/UX Designer. We are reviewing resume's and will follow up in the...",
    attachment: null,
    date: '2023-05-28T23:00:21Z',
    userProfile: 'assets/images/NoPathFemale.png',
  },
];

export const INITIAL_MESSAGE = {
  id: 0,
  name: '',
  subject: '',
  email: '',
  message: '',
  attachment: [],
  description: '',
  date: '',
  userProfile: '',
};
