const router = () => {


  return (
    <Router>
      <Route>

        // https://our-site.com/
        <Route exact path="/" component={Home}/>

        // https://our-site.com/:color
        <Route path="/:color" component={Filters}>

          // https://our-site.com/grey/template/new-york
          <Route path="/template/:name" component={Template} />

          // https://our-site.com/grey/demo/new-york
          <Route path="/demo/:name" component={Template} />


        </Route>


        // https://our-site.com/menu
        <Route path="/menu" component={Menu}/>


      </div>
    </Router>
  );
};