import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {/* {
                    resumeData.testimonials && resumeData.testimonials.map((item) => {
                      return (
                        <li>
                          <blockquote>
                            <p>
                              {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  } */}
                  <li>
                  <blockquote class="twitter-tweet" data-lang="en" data-theme="dark" data-link-color="#E95F28"><p lang="en" dir="ltr">My new future starts today, I graduated from Udacity! <a href="https://t.co/66AtkDQ0hM">https://t.co/66AtkDQ0hM</a> <a href="https://twitter.com/hashtag/udacity?src=hash&amp;ref_src=twsrc%5Etfw">#udacity</a> <a href="https://t.co/QFWkvsFu33">pic.twitter.com/QFWkvsFu33</a></p>&mdash; arpit jain (@arpit_jain018) <a href="https://twitter.com/arpit_jain018/status/971756348852658176?ref_src=twsrc%5Etfw">March 8, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </li>

                  <li>
                  <blockquote class="twitter-tweet" data-lang="en" data-theme="dark" data-link-color="#E95F28"><p lang="en" dir="ltr">It was a proud moment, to be a part of world&#39;s biggest Hackathon <a href="https://twitter.com/hashtag/sih2017?src=hash&amp;ref_src=twsrc%5Etfw">#sih2017</a> <a href="https://t.co/f3Y1E9XBsc">pic.twitter.com/f3Y1E9XBsc</a></p>&mdash; arpit jain (@arpit_jain018) <a href="https://twitter.com/arpit_jain018/status/849132788607569920?ref_src=twsrc%5Etfw">April 4, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </li>
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
    );
  }
}