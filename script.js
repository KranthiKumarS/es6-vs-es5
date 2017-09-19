/**
     * Constants
     */
    console.info("--*Constants*--");
   
        // ES5
        ( function(){
            Object.defineProperty(typeof global === "object" ? global : window, "PI", {
                value: 3.141593,
                enumerable: true,
                writable: false,
                configurable: false
            });
            console.log("--ES5--");
            console.log("PI = " + PI);
        } )();
            // ES6
        {
            const PI = 3.141593;
            console.log("--ES6--");
            console.log("PI = " + PI);
        }
    console.info("--*Constants* End--");
////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Scoping
     * 
     * Block scoped variables
     */
    console.info("--*Scoping > Block scoped variables*--");
        //ES5
        ( function() {
            var i, x, y, a=2, b=2;
            for(i=0; i< a.lenght; i++){
                var x = a[i];
            }
            for(i=0; i< b.lenght; i++){
                var y = b[i];
            }
            
            var callbacks = [];
            for (var i = 0; i <= 2; i++) {
                (function (i) {
                    callbacks[i] = function() { return i * 2; };
                })(i);
            }
            console.log("--ES5--");
            console.log("Callback[0] = " + callbacks[0]());
            console.log("Callback[1] = " + callbacks[1]());
            console.log("Callback[2] = " + callbacks[2]());
        } )(); 

        //ES6
        {
            var a=2, b=3;
            for(let i=0; i< a.lenght; i++){
                let x = a[i];
            }
            for(let i=0; i< b.lenght; i++){
                let y = b[i];
            }
            
            let callbacks = [];
            for (let i = 0; i <= 2; i++) {
                callbacks[i] = function() { return i * 2; };
            }
            console.log("--ES6--");
            console.log("Callback[0] = " + callbacks[0]());
            console.log("Callback[1] = " + callbacks[1]());
            console.log("Callback[2] = " + callbacks[2]());
        }
    console.info("--*Scoping > Block scoped variables* End--");
    
    /**
     * Scoping
     * 
     * Block scoped functions
     */
    console.info("--*Scoping > Block scoped functions*--");
    //ES5
    ( function(){
        console.log("--ES5--");
        ( function(){
            var foo = function() { return 1;};
            console.log(foo() === 1);
            ( function(){
                var foo = function(){ return 2;};
                console.log(foo() === 2);
            })();
            console.log(foo() === 1);
        })();

        
        console.log();
        
    } )();
    
    //ES6
    {
        console.log("--ES6--");
        {
            function foo() { return 1;}
            console.log(foo() === 1);
            {
                function foo() { return 2;}
                console.log(foo() === 2);
            }
            console.log(foo() === 1);
        }
        console.log();
        
    }
    console.info("--*Scoping > Block scoped functions* End--");
/////////////////////////////////////////////////////////////////////////
    /**
     * Arrow Functions
     * 
     * Expression Bodies
     */
    console.info("--*Arrow Functions > Expression Bodies*--");
    //ES5
    ( function(){
        console.log("--ES5--");
        evens = [2,4,6,8,10];
        odds = evens.map( function(v) { return v+1;} );
        pairs = evens.map( function(v ) { return { envn: v, odd: v+1 }; } );
        nums = evens.map( function(v, i) { return i + ":" + v; } );

        console.log( evens);
        console.log( odds );
        console.log( pairs );
        console.log( nums );
                
    } )();

    //ES6
    {
        console.log("--ES6--");
        evens = [2,4,6,8,10];
        odds = evens.map( v => v+1 );
        pairs = evens.map( v => ({ envn: v, odd: v+1 }) );
        nums = evens.map( (v, i) => i + ":" + v);

        console.log( evens);
        console.log( odds );
        console.log( pairs );
        console.log( nums );
        
    }
    console.info("--*Arrow Functions > Expression Bodies* End--");
//////////////////////////////////////////////////////////////////////////////
    /**
     * Arrow Functions
     * 
     * Statement Bodies
     */
    console.info("--*Arrow Functions > Statement Bodies*--");
    //ES5
    ( function(){
        console.log("--ES5--");
        var numbs= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fives = [];
        
        numbs.forEach( function(v) {
            if( v % 5 === 0){
                fives.push(v)
            }
        } );
        console.log( fives );
                
    } )();

    //ES6
    {
        console.log("--ES6--");
        let numbs= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fives = [];

        numbs.forEach( v => {
            if( v % 5 === 0) {
                fives.push(v);
            }
        } );
        console.log( fives );
        
    }
    console.info("--*Arrow Functions > Statement Bodies* End--");

    /**
     * Arrow Functions
     * 
     * Lexical this
     */
    console.info("--*Arrow Functions > Lexical this*--");
    //ES5
    ( function(){
        console.log("--ES5--");
        // var numbs= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fives = [];
        
        // var self = this;
        // this.numbs.forEach(function (v) {
        //     if (v % 5 === 0)
        //         self.fives.push(v);
        // });
        // console.log( fives );
                
    } )();

    //ES6
    {
        console.log("--ES6--");
        // let numbs= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fives = [];

        // this.numbs.forEach( v => {
        //     if( v % 5 === 0) {
        //         fives.push(v);
        //     }
        // } );
        // console.log( fives );
        
    }
    console.info("--*Arrow Functions > Lexical this* End--");
//////////////////////////////////////////////////////////////////////////
    /**
     * Extended Parameter Handling
     * 
     * Default parameter value
     */
    console.info("--*Extended Parameter Handling > Default parameter value*--");
    //ES5
    ( function(){
        console.log("--ES5--");

        function f( x, y, z) {
            if( x=== undefined)
                x=1;
            if( y=== undefined)
                y=2;
            if( z=== undefined)
                z=3;
            return x + y + z;
        };
        console.log( f(0) );
                
    } )();

    //ES6
    {
        console.log("--ES6--");
        
        var f = (x=1, y=2, z=3) => { 
            return x + y + z;
        }
        console.log( f(0) );
        
    }
    console.info("--*Extended Parameter Handling > Default parameter value* End--");
/////////////////////////////////////////////////////////////////////////
    /**
     * Extended Parameter Handling
     * 
     * Reset parameter
     */
    console.info("--*Extended Parameter Handling > Reset parameter*--");
    //ES5
    ( function(){
        console.log("--ES5--");

        function f( x, y, z ) {
            var a = Array.prototype.slice.call(arguments, 3);
            
            return ( x + y + z) * a.length
        };
        console.log( f(1, 2, 3, "hello", true, 7) );
                
    } )();

    //ES6
    {
        console.log("--ES6--");
        
        var f = (x=1, y=2, z, ...a) => { 
            return (x + y + z) * a.length;
        }
        console.log( f(1, 2, 3, "hello", true, 7) );
        
    }
    console.info("--*Extended Parameter Handling > Reset parameter* End--");
/////////////////////////////////////////////////////////////////////////
    /**
     * Extended Parameter Handling
     * 
     * Spread operator
     */
    console.info("--*Extended Parameter Handling > Spread operator*--");
    //ES5
    ( function(){
        console.log("--ES5--");

        var params = [ 6 ,7 , "world"];
        var other = [4, 5].concat(params);
        function f( x, y, z ) {
            var a = Array.prototype.slice.call(arguments, 3);
            
            return ( x + y + z) * a.length
        };
        console.log( params );
        console.log( other );
        console.log( f(1, 2, 3, other, "hello", true, 7) );
                
    } )();

    //ES6
    {
        console.log("--ES6--");
         var params = [ 6 ,7 , "world"];
        var other = [4, 5, ...params];

        var f = (x=1, y=2, z, ...a) => { 
            return (x + y + z) * a.length;
        }
        console.log( params );
        console.log( other );
        console.log( f(1, 2, 3, other, "hello", true, 7) );
        
    }
    console.info("--*Extended Parameter Handling > Spread operator* End--");
/////////////////////////////////////////////////////////////////////////













//////////////////////////////////////////////////////////////////////////
    /**
     * Sample
     */
    console.info("--*Sample > Sample*--");
    //ES5
    ( function(){
        console.log("--ES5--");
        
        console.log(  );
                
    } )();

    //ES6
    {
        console.log("--ES6--");
        
        console.log(  );
        
    }
    console.info("--*Sample > Sample* End--");
//////////////////////////////////////////////////////////////////////////