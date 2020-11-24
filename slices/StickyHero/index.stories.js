/** @jsx jsx */
import Component from "./";
import model from "./model";
import mocks from "./mocks.json";
import { jsx, Text } from 'theme-ui';
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";
import Heading from '../../components/heading'

mocks.forEach(variation => {
  storiesOf(model.name, Component)
  .addParameters({ component: Component })
  .add(variation.name, () => (
    <div>
      <Heading level={1}>Scroll to the bottom</Heading>
      <Text sx={{marginBottom: '20px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus
        dictum pulvinar. Praesent ac enim pulvinar, tristique tortor vel,
        hendrerit erat. In in egestas velit. Integer eget hendrerit ex.
        Suspendisse ex leo, pharetra quis nisi vitae, dapibus mattis orci. Donec
        posuere odio ut libero vehicula, sit amet dictum arcu facilisis. Proin
        blandit enim a dolor feugiat, id commodo ex scelerisque. Vestibulum
        egestas venenatis lorem sagittis ornare. Praesent convallis quis ipsum
        non pretium. Aliquam nec augue nec orci euismod laoreet.
      </Text>
      <Text sx={{marginBottom: '20px'}}>
        Maecenas pharetra quis magna eget convallis. Praesent quis lectus sed
        sem blandit facilisis. Proin nulla augue, dictum eget leo vitae,
        faucibus finibus ex. Aenean velit lacus, fringilla non lectus in,
        sagittis bibendum quam. Quisque et lorem ac arcu ullamcorper placerat.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. In ullamcorper leo in lorem porttitor
        convallis. Maecenas interdum, neque ut porttitor fermentum, diam lectus
        pharetra urna, vitae convallis sem sem a massa. Quisque mattis faucibus
        tempus. In lorem nisi, congue eget molestie quis, suscipit in tellus.
      </Text>
      <Text sx={{marginBottom: '20px'}}>
        Vestibulum sem odio, placerat ut urna vel, tempor convallis nulla.
        Integer ornare eleifend mollis. Aenean eget odio orci. Cras laoreet urna
        et feugiat viverra. Maecenas orci arcu, volutpat id nisi at, blandit
        mollis libero. Nullam turpis velit, facilisis quis bibendum ut, cursus
        eleifend tellus. Sed vitae placerat lacus, quis iaculis sem. Aenean sit
        amet libero eu nunc sagittis iaculis. Nunc gravida egestas sapien,
        volutpat sagittis felis semper et.
      </Text>
      <Text sx={{marginBottom: '20px'}}>
        Etiam condimentum augue eget condimentum fermentum. Quisque et finibus
        risus, ac tincidunt dolor. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Vivamus
        vestibulum nibh nisl, sed vehicula elit tincidunt at. Donec tristique
        odio ac nulla laoreet posuere. Nulla urna ex, tempor eget velit id,
        gravida tempus lectus. Duis consequat bibendum ex, sed varius magna
        euismod ac. Sed ultrices varius mi, et volutpat risus pretium quis.
        Proin sed urna at nulla laoreet tempor. Nunc dapibus erat vel vulputate
        commodo. Aenean volutpat est eros, in venenatis ipsum scelerisque at.
        Cras et porta sapien, in feugiat nulla. Integer suscipit magna sit amet
        finibus rhoncus. Proin blandit erat ac purus lobortis rutrum.
      </Text>
      <Component
        slice={variation}
        effect={select("Effect", {
          none: "none",
          scale: "scale",
          overlay: "overlay"
        })}
        image={text("Image", "")}
        text={text("Text", "")}
        textVariant={select("Text Variant", {
          text: "text"
        })}
      />
    </div>
  ));
});
