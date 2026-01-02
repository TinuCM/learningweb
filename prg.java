import java.util.ArrayList;

class person{
    int id;
    String name;
    public person(int id,String name){
        this.id=id;
        this.name=name;
    }
    void displayinfo(){
        System.out.println("id is "+ id +" and name is " + name);
    }
}
class student extends person{
    ArrayList<Integer> marks=new ArrayList<>();
     int sum;
     double average;
    public student(int id,String name,ArrayList<Integer> marks){
        super(id,name);
        this.marks=marks;
       
    }
    double calculateAverage() throws Exception{
            
        if(marks.isEmpty())
            throw new Exception("Mark list is empty");
            for(int i=0;i<marks.size();i++)
            {
                sum+=marks.get(i);
            }
            // System.out.println(sum);
        average=sum/marks.size();
        return average;
        }
        @Override
        public void displayinfo(){
            super.displayinfo();
            System.out.println("marks"+marks);
            try{
                System.out.println("Average marks :"+ calculateAverage());
            }
            catch(Exception e){
                System.out.println("Average marks  :"+ e.getMessage());
            }
        }
}


public class prg {
    public static void main(String[] args) {
        ArrayList <student> students = new ArrayList<>();
        ArrayList <Integer> marks1= new ArrayList<>();
        marks1.add(30);
        marks1.add(50);
        marks1.add(60);
        ArrayList <Integer> marks2= new ArrayList<>();
        // p.displayinfo();
        student s1=new student(1,"alice",marks1);
        student s2=new student(2,"tinu",marks2);
        students.add(s1);
        students.add(s2);
        s1.displayinfo();
        s2.displayinfo();
        try {
    // double avg = s1.calculateAverage(marks1);
    // System.out.println("Average is" + avg);
} catch (Exception e) {
    System.out.println(e.getMessage());
}
    }
}
