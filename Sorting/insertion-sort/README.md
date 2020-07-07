English below 
Ալգորիթմը ստանում է մասիվ և դասավորում այն  աճման կարգով։
j այն էլեմենտի ինդեքսն է որը պետք է սորտավորենք։
Յուրաքանչյուր ցիկլի իտերացիայի ժամանակ մասիվը կազմված է երկու մասից,a[1...j-1] սորտավորված և a[ j+1...n] դեռ չսորտավորված։
Առաջին իտերացիայի ժամանակ,երբ j = 1, a[0...j-1] մասիվում կա a[0] էլեմենտ,այսինքն այն արդեն սորտավորված է։
Ցիկլի ներսում էլեմենտները տեղաշարժվում են աջ(4-7), մեկ քայլ,մինչև a[ j] էլեմենտի համար տեղ չազատվի և դնենք այդտեղ (8)։
Վերջում  j = n+1 վերցնելով,  կստանանք սորտավորված մասիվ։
Ալգորիթմի կատարմա բարդությունը  O(n ^ 2):

The algorithm gets a massive with n elements and  sort it by increment.
j is the index of the element we need to sort.
During the iteration of each cycle, the massive consists of two parts, a[1 ... j-1] sorted and a[ j + 1 ... n] not yet sorted.
During the first iteration, when j = 1, a[0 ... j-1] has an element a[0], and it is already sorted.
Inside the cycle, the elements move to the right (4-7) for one step, until there is free space for the a[ j] element and we put it there (8).
By taking j = n + 1 at the end, we get a sorted massive.
The complexity of the algorithm O(n ^ 2).
![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)


## References

[Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
