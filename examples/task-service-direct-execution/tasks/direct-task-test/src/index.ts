
export async function handler(input: any) {

  // Any Business logic can come here

  if(input.data && input.data.name){
    return {
      result: `${input.data.name}, Hello World`
    }
  }

  return {
    result: "No Name"
  }
}
