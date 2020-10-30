import React, { Fragment } from 'react';
import Staffs from './StaffCard';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
} from 'react-native';
const StaffContainer = ({ navigation }) => {
  const pastorsData = [
    {
      label: 'Pastors',
      image: require('../../images/ourPastors1.jpg'),
      name: 'Pastor Fiifi Pentsil',
      About:
        "Pastor Fiifi is a pastor, speaker and motivator. He obtained his bachelor's degree in art from the University of Science and Technology in Kumasi, Ghana. His industrious spirit was obvious even in his college years and he started a graphic arts company with his friends and designed cards for students on campus. After graduation, their little company became a business that included an art gallery and desktop publishing. He also began serving as a youth pastor during those years and continued on to become a pastor. He is ordained through World Ministry Fellowship, and is currently the senior pastor of House of Worship in Randallstown, Maryland.\
      Pastor Fiifi is a great teacher and has served on several committees in the Baltimore community. His first book, The Ultimate Husband has challenged many men and women to seek God's best in marriage. He has also co-authored numerous teaching and training guides for marriage, personal growth and church development. He has a strong desire to see businesses reach their full potential, and is currently working on books and teachings for the business sector. Pastor Fiifi is well travelled and speaks internationally on a variety of topics including business, marriage, and leadership. One unique thing about Pastor Fiifi is he is a 'regular guy'! He enjoys \
       spending time with the people of God and can often be found hanging out with the youth, playing with the children, or laughing with the adults! One of his mottos for ministry is this: \"Have fun!\" He lives by that piece of advice and is having a lot of fun motivating people to be their best! He lives in beautiful Owings Mills, Maryland with his family, where you can still find an art piece or two of his!",
    },
    {
      label: 'Pastors',
      image: require('../../images/ourPastors2.jpg'),
      name: 'Dr. Sybil Pentsil',
      About:
        'Dr. Sybil is a multi talented woman who\
      wears many hats in her efforts to impact\
      society. She grew up in various part of the\
      world including New York, Ghana and Liberia. \
      She attended University at Albany in upstate \
      New York, and graduated summa cum laude with \
      a degree in Chemistry. She then moved to \
      Maryland to attend the world-renowned Johns \
      Hopkins University Schools of Medicine and \
      Public Health where she received her medical \
      degree and masters in public health \
      respectively. After completing residency \
      training at Sinai Hospital in Baltimore in \
      2000, Sybil began a career in Pediatrics, \
      and currently works as an attending \
      physician in inpatient pediatric medicine at \
      Sinai Hospital of Baltimore. She is also \
      ordained as a minister with World Ministry \
      Fellowship, and has served as a pastor at \
      House of Worship in Randallstown, Maryland \
      since its inception. In 2005, Sybil and her \
      husband Fiifi co-founded Better Life Today, \
      a self-improvement organization. They are \
      known internationally for impacting \
      marriages & businesses. Sybil has written \
      and co-authored many booklets and training \
      guides for classes on pre-marital training, \
      marriage counseling, spiritual development \
      and leadership training. Her books include \
      Free to Dance - Gaining victory over your \
      thoughts and emotions & Motherhood \
      Redefined, both available from Better Life \
      Today. With this incredible background, it \
      is not surprising that Sybil is a gifted \
      teacher who addresses a broad variety of \
      topics & teachings including personal \
      leadership training & development, time \
      management, women & ministry, marriage, \
      child development, parenting, pediatric care \
      & management, and much more. Sybil speaks at \
      conferences, seminars, youth groups, medical \
      meetings, schools, churches, businesses, and \
      other groups. She is a powerful preacher and \
      known for digging deep in her messages. When \
      it’s all said and done, Dr. Sybil’s pride \
      and joy has always been her husband and \
      three boys Jeremy, Jason and Jesse.',
    },
    {
      label: 'Pastors',
      image: require('../../images/ourPastors3.jpg'),
      name: 'Pastor Fiifi Pentsil',
    },
    // {
    //   label: 'Pastors',
    //   image: require('../../images/ourPastors1.jpg'),
    //   name: 'Pastor Fiifi Pentsil',
    // },
    // {
    //   label: 'singers',
    //   image: require('../../images/ourPastors2.jpg'),
    //   name: 'Dr. Sybil Pentsil',
    // },
    // {
    //   label: 'singers',
    //   image: require('../../images/ourPastors3.jpg'),
    //   name: 'Pastor Fiifi Pentsil',
    // },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {pastorsData.map((staff, idx) => (
        <Staffs
          key={idx}
          staff={staff}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    // flexDirection: 'row',
  },
});

export default StaffContainer;
