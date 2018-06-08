![Header Image](assets/react-unstated-pattern.png)

# React Context API + Unstated

> **How to use The React Context API & Inject Dependencies w/ "Unstated"**  
> _An HMH Engineering Workshop_  
> Presented on 2018-06-08 - By [Alistair MacDonald](https://F1LT3R.io) - [HMH Email](mailto:alistair.macdonald@hmhco.com)

## 💻 Slides

<iframe src="//slides.com/alistairmacdonald-f1lt3r/react-context-api/embed?token=aHyjYpkm" width="100%" height="380px" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

[Link to Slide Deck](https://slides.com/alistairmacdonald-f1lt3r/react-context-api?token=aHyjYpkm)

> Feel free to add comments/concerns to the slide deck.

## 🎥 Video

<iframe width="100%" height="380px" frameborder="no" src="https://confluence.hmhco.com/download/attachments/161720078/Workshop%20React%20Context%20API-20180608%201256-1.mp4?version=1&modificationDate=1528474635000&api=v2"></iframe>

> **Note:** Audio does not start until about 6 min.

## 🔗 Links

**Boston Engineering Talks @ HMH**

Do you have something you want to **present**? - [Sign up to present a talk/workshop/course.](https://goo.gl/HkiA27)
Do you have something you want to **learn**? - [Suggest what HMH Engineers be learning.](https://www.surveymonkey.com/r/CXX7RNQ)

**Links from the Presentation**

- [Prop Drilling Example](https://codesandbox.io/s/q87kpjzlyj) on CodeSandbox
- [Blog Post - The Unstated React Pattern](https://itnext.io/the-unstated-react-service-pattern-786ea6168d1d) on Medium
- [Re-usable Code - Unstated React Pattern](https://codesandbox.io/s/xo679ykm1o) on CodeSandbox -(You can use this pattern to share state in your React apps.)

**Notable Dev Community Posts**

- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) from the Co-author of Redux
- [The Redux Realization](https://twitter.com/housecor/status/962754389533429760?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fblog.kentcdodds.com%2Fmedia%2F1e51deeba20cd3ed41a39eaacc3b05ba%3FpostId%3D66de608ccb24)
- [unstated — The setState of React State Management](https://medium.com/react-native-training/unstated-the-setstate-of-react-state-management-8ce47b240e6d)
- [Managing State in React with Unstated](https://css-tricks.com/managing-state-in-react-with-unstated/)
- [Application State Management](https://blog.kentcdodds.com/application-state-management-66de608ccb24)

## 👻 Challenge #1

1. 🏁 Use this starter: [Challenge #1 Starter](https://codesandbox.io/s/648j667on)
1. 🍴 Fork it!
1. ✨ Create a Context with a default value
1. 🌟 Create `<Provider/>` in `<App/>`
1. 💫 Create `<Subscriber/>` in `<FooComponent/>`
1. 🙌 Output the default value in `<FooComponent/>`

#### Hints

```js
const defaultValue = 'foo';
const MyContext = React.createContext(defaultValue);
```

```js
<MyContext.Provider value="bar">
    <YourApp/>
</MyContext.Provider>
```

```js
<YourApp>
    <WayDownDeep>
        <MyContext.Consumer>
            {value => (
                <div>
                    {value}
                </div>
            })
        </MyContext.Consumer>
    </WayDownDeep>
</YourApp>
```

[Solution to Challenge #1](https://codesandbox.io/s/o5xzy9r535)

## 😱 Challenge #2

1. 🏁 Use this starter: [Challenge #2 Starter](https://codesandbox.io/s/rr4o5zy374)
1. 🍴 Fork it!
1. ✨ Make FooComponent an external dependency
1. 💫 Make your Context an external dependency
1. 🌟 Pass state instead of just a value
1. 🙌 Update `<Provider/>` state from `<FooComponent/>`


#### Solutions

- [Challenge #2 Solution - Steps 1 & 2](https://codesandbox.io/s/8kox94q0l8)
- [Challenge #2 Solution - Steps 3 & 4](https://codesandbox.io/s/pmymoz841q)

