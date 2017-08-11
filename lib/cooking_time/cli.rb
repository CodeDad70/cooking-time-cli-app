class CookingTime::CLI

  def welcome
    puts "It's Cooking Time !"
    menu
    user_input
    navigation
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

  def user_input
    time_check = [5, 10, 15, 20, 30, 45]
    input = nil
    time_select = nil 
    while input == nil 
      puts "Enter the number of minutes you have to cook - 5, 10, 15, 20, 30 or 45"
      puts "Or enter q to quit"
      input = gets.strip
      time_select = input.to_i
      
      if time_check.include?(time_select) 
        CookingTime::Scraper.scrape_recipes(time_select)
      elsif input == "q"
        goodbye
      else 
        puts "Oops! Please select number of minutes from the list" 
        user_input
      end
    end
    navigation
  end
    

  def navigation
      input = nil
      input = gets.strip
      puts "Enter q to quit"
      puts "Enter m to return to main menu"
      if input.downcase == "q"
        goodbye
      elsif input.downcase == "m"
        menu
      end
    end


 
  def goodbye
    puts"goodbye"
  end



end