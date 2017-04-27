export default function(){
  this.transition(
    this.hasClass('commentSection'),
    this.toValue(true),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('user'),
    this.use('toUp', { duration: 700 }),
    this.reverse('toDown', { duration: 700 })
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('post'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('newpost'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('user'),
    this.toRoute('newpost'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('user'),
    this.toRoute('post'),
    this.use('toLeft'),
    this.reverse('toRight')
  );


};
