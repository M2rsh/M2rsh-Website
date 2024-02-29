import styles from './Home.module.scss';
import { Link, Element } from 'react-scroll';

function Home() {
  return (
    <>
      <div className={styles.parallax_wrapper} id="parallax_wrapper">
        <div className={styles.parallax_group}>
          <div className={styles.parallax_layer} id={styles.layer1}>
            <p>Intro screen</p>
            <p className={styles.smoltext}>&lt;!-- Work in progress --&gt;</p>
            <Link to="main" smooth={true} duration={1400} containerId="parallax_wrapper" className={styles.link}></Link>
          </div>
          <div className={styles.parallax_layer} id={styles.layer2} />
          <div className={styles.parallax_layer} id={styles.layer3} />
          <div className={styles.parallax_layer} id={styles.layer4} />
          <div className={styles.parallax_layer} id={styles.layer5} />
          <div className={styles.parallax_layer} id={styles.layer6} />
          <div className={styles.parallax_layer} id={styles.layer7} />
        </div>
        <Element name="main">
          <div className={`${styles.parallax_layer} ${styles.main}`}>
            <div className={styles.container}>
              <div className={styles.text_container}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper. Consequat id porta nibh venenatis cras sed. Risus nec feugiat in fermentum. Eget velit aliquet sagittis id consectetur. Augue neque gravida in fermentum et sollicitudin ac orci. Phasellus egestas tellus rutrum tellus. Eros in cursus turpis massa tincidunt dui ut ornare. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Gravida neque convallis a cras semper. Fringilla urna porttitor rhoncus dolor purus non.</p>
                <br />
                <p>Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Nec ultrices dui sapien eget mi proin sed. Et molestie ac feugiat sed lectus vestibulum. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Nulla at volutpat diam ut venenatis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Sapien nec sagittis aliquam malesuada bibendum arcu. Quisque non tellus orci ac auctor augue mauris. Vel facilisis volutpat est velit egestas dui id. Turpis massa sed elementum tempus egestas. Feugiat sed lectus vestibulum mattis ullamcorper.</p>
                <br />
                <p>Curabitur gravida arcu ac tortor. Massa ultricies mi quis hendrerit dolor. Dolor sit amet consectetur adipiscing elit duis. Orci eu lobortis elementum nibh tellus molestie nunc. Enim blandit volutpat maecenas volutpat blandit. Id interdum velit laoreet id donec ultrices. Id aliquet risus feugiat in ante metus. Quam elementum pulvinar etiam non quam. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ac auctor augue mauris augue neque. Purus sit amet luctus venenatis lectus magna fringilla.</p>
                <br />
                <p>Id volutpat lacus laoreet non curabitur gravida. Consequat ac felis donec et odio pellentesque. Purus faucibus ornare suspendisse sed nisi lacus sed. Sapien pellentesque habitant morbi tristique senectus et. Ut pharetra sit amet aliquam. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Risus nec feugiat in fermentum. Morbi tincidunt ornare massa eget egestas purus viverra. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque. Iaculis eu non diam phasellus vestibulum lorem sed. Libero justo laoreet sit amet. Justo laoreet sit amet cursus. Consequat semper viverra nam libero. Viverra nibh cras pulvinar mattis nunc sed blandit. Mollis aliquam ut porttitor leo. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu.</p>
                <br />
                <p>Tincidunt tortor aliquam nulla facilisi cras. Orci phasellus egestas tellus rutrum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Ultrices gravida dictum fusce ut placerat. Habitant morbi tristique senectus et netus et malesuada fames ac. Massa eget egestas purus viverra accumsan in nisl. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Id porta nibh venenatis cras sed felis eget velit aliquet. Adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.</p>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </>
  )
}

export default Home
