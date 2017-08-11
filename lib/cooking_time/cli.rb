class CookingTime::CLI
  attr_accessor :all_recipes

  def welcome
    puts "It's Cooking Time !"
    menu
    main_menu
    recipe_finder
    goodbye
  end

  def menu 
    puts <<-DOC
     
     How much time have you got ?

     
     I'm hangry - keep it simple (5 min.)
     Sooner than later please (10 min.)
     Let's make it fast - but not an emergency (15 min.)
     Let's make something nice (20 min.)
     Let's make something fancy pants (30 min.)
     I have company and I need to impress (45 min.)

     DOC
  end

  def main_menu
    time_check = [5, 10, 15, 20, 30, 45]
    input = nil
    time_select = nil 
    while input == nil 
      puts "Enter the number of minutes you have to cook - 5, 10, 15, 20, 30 or 45"
      puts "Or enter q to Quit"
      input = gets.strip
      time_select = input.to_i
      
      if time_check.include?(time_select) 
        CookingTime::Scraper.scrape_recipes(time_select)
        recipe_list = @all_recipes
      elsif input == "q"
        goodbye
      else 
        puts "Oops! Please select number of minutes from the list" 
        main_menu
      end
    end

  end
    
  def recipe_finder
    number_check = [1..25]
    recipe_select = nil
    input = nil
    puts "Let's get cooking ! Select a recipe"
    CookingTime::Scraper.list_recipes
    while input == nil
      puts "Select the number for the recipe you'd like to see "
      puts "Or enter q to Quit - m for Main Menu"
    input =gets.strip
    recipe_select = input.to_i
#     if number_check.include? recipe_select

# end
      end
     
    end

  
 
  def goodbye
    puts"goodbye"
  end



end