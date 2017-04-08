// inheritance can cause many issues
// inheritance: design your types around what they are
// composition: design you types around what they do

const barker = (state) => ({
  bark: () => console.log('woof, i am ' + state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

barker({name: 'karo'}).bark()

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
}

murderRobotDog('sniffles').bark()
