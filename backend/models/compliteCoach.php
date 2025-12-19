<?php
    class compliteCoach {
        public static function complite($bio, $experience, $phone, $photo){
            $stmt = $conn->prepare(
                "INSERT INTO coachProfile (bio, experience, phone, photo) VALUES (?, ?, ?, ?)"
            );
            $stmt->bind_param("s,i,s,s", $bio, $experience, $phone, $photo);
            return $stmt->execute();
        }
    }
?>