import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Asteroid here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Asteroid extends Actor
{
    /**
     * Act - do whatever the Asteroid wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    
    public Asteroid()
    {
        GreenfootImage image = getImage();
        
        setImage(image);
    }
    public void addedToWorld()
    {
        Actor a = getOneIntersectingObject(Rocket.class);
        if(a!=null)
        {
            getWorld().removeObject(this);
        }
    }
    public void act() 
    {
        World world = getWorld();
        MyWorld space = (MyWorld)world;
        move(2);
        if(Greenfoot.getRandomNumber(20)==1)
        {
            setRotation(Greenfoot.getRandomNumber(360));
        }
        Actor b = getOneIntersectingObject(Rocket.class);  
        if(b != null)  
        {  
            space.addObject(new GameOver(),(int)(0.5*space.getWidth()),(int)(0.5*space.getHeight()));
            getWorld().removeObject(b);   
            getWorld().removeObject(this);
            
        }
        int topX=getWorld().getWidth()-1;
        int topY=getWorld().getHeight()-1;
        int lowX=0;
        int lowY=0;
        int x = getX();
        int y = getY();
        
        if(x<=lowX || y<=lowY || x>=topX || y>=topY)
        {
            turn(180);
        }
    }
}
