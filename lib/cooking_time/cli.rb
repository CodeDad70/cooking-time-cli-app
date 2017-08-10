class CookingTime::CLI

  def welcome
    puts "It's Cooking Time !"
    menu
    navigation
    goodbye
  end

  def menu 
    puts <<-DOC
     
     How much time have you got ?

     
     1. I'm hangry - keep it simple (5 min.)
     2. Sooner than later please (10 min.)
     3. Let's make it fast - but not an emergency (15 min.)
     4. Let's make something nice (20 min.)
     5. Let's make something fancy pants (30 min.)
     6. I have company and I need to impress (45 min.)

     DOC
  end


  def navigation
    # @recipes = CookingTime::Scraper.recipes
    input = nil 
    @time_select = nil 
    while input == nil
    puts "Make a selection : 1 - 6"
    
    input = gets.strip

    if input.to_i == 1
      time_select = 5
      CookingTime::Scraper.scrape_recipes(time_select)
    else 
      menu


    end
  end
end

  def goodbye


  end



end