## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
### Variable

Assign variable
```
amunnya foo itu "hello world"
// let foo = "hello world"

bujuram foo itu 123
// const foo = 123
```

Reassign variable
```
inilawan foo itu "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
amunnya foo itu positive vibes
// let foo = true

amunnya foo itu worth it
// let foo = true

amunnya foo itu negative vibes
// let foo = false
```

### Print / Console.log
```
tampaikan "Hello world"
// console.log("Hello world")

tampaikan foo
// console.log(foo)
```


### Condition

```
amun foo itu "Hello world"
  tampaikan "its hello world"
udaham

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
amun foo lebih gede 3
  tampaikan "its bigger than 3"
munhandak foo itu 3
  tampaikan "foo is 3"
amunsik
  tampaikan "its smaller than 3"
udaham

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else if (foo == 3) {
  console.log("foo is 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison : 
- `itu`: ' == ',
- `gak`: ' != ',
- `lebih gede`: ' > ',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

### Loop

#### **`For` loop**:
```
ulihbalik i endup 10
  amun i lebih gede 3
    tampaikan "loop ke " + i
  udaham
udaham

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

#### **`For of` loop**:
```
ulihbalik semua foo dari bar
  tampaikan foo
udaham

// transform to
for (const foo of bar) {
  console.log(foo);
}
```

#### **`break`** and **`continue`**:
```
sudahi
// break;

lanjuti
// continue;
```

### Function
```
jadigasan my_story
    amunnya umur itu 21
    tampaikan "Umur lu " + umur
sesudaham

manggilmah my_story

jadigasan fungsi_param_banyak a b c
    tampaikan "a: " + a
    tampaikan "b: " + b
    tampaikan "c: " + c
sesudaham

manggilmah fungsi_param_banyak 3 4 5
```

### Async Function
```
kepikiran my_story
    amunnya umur itu 21
    tampaikan "Umur lu " + umur
sesudaham

manggilmah my_story

jadigasan fungsi_param_banyak a b c
    tampaikan "a: " + a
    tampaikan "b: " + b
    tampaikan "c: " + c
sesudaham

manggilmah fungsi_param_banyak 3 4 5
```

### Try Catch & Exception
```
mencoba dolo
  tampaikan "Something wrong"
  salahway "Error message"
tikamHalus
  tampaikan "Catch error"
yaudaham
  tampaikan "finish finally"
udaham


// transform to
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
} 
```
